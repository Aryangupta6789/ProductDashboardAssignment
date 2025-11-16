import { useContext, useEffect, useState } from 'react'
import ProductList from './Components/ProductList'
import { appContext } from './Context/AddContext'
import Header from './Components/Header'
import FilterBar from './Components/FilterBar'
import Pagination from './Components/Pagination'
import ProductModal from './Components/ProductModal'

function App () {
  const { theme } = useContext(appContext)

  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [query, setQuery] = useState('')
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sort, setSort] = useState('')
  const [loading, setLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6


  const [modalProduct, setModalProduct] = useState(null)
  const openModal = product => setModalProduct(product)
  const closeModal = () => setModalProduct(null)


  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  //  Add/Remove Favorite
  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // Fetching products
  useEffect(() => {
    async function FetchProducts () {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data)
        setFiltered(data)
        setLoading(false)

        const uniqueCats = ['all', ...new Set(data.map(item => item.category))]
        setCategories(uniqueCats)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }
    FetchProducts()
  }, [])

  // Dark mode class toggle
  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  // Filtering logic
  useEffect(() => {
    let list = [...products]

    list = list.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )

    if (selectedCategory !== 'all') {
      list = list.filter(item => item.category === selectedCategory)
    }

    if (sort === 'low-high') list.sort((a, b) => a.price - b.price)
    if (sort === 'high-low') list.sort((a, b) => b.price - a.price)
    if (sort === 'rating') list.sort((a, b) => b.rating.rate - a.rating.rate)

    setFiltered(list)
    setCurrentPage(1)
  }, [query, selectedCategory, sort, products])

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filtered.length / itemsPerPage)

  return (
    <div className='min-h-screen transition-colors duration-300 text-black dark:bg-[#1c1c1e] dark:text-white bg-[#f5f5f7]'>

      <Header setQuery={setQuery} />

      <div className='mx-auto px-7 py-6'>
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sort={sort}
          setSort={setSort}
        />

        <ProductList
          products={currentItems}
          loading={loading}
          openModal={openModal}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {modalProduct && (
        <ProductModal product={modalProduct} closeModal={closeModal} />
      )}
    </div>
  )
}

export default App
