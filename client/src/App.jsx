import React, {useState} from 'react'
import Header from './components/Header'
import ImageContainer from './components/ImageContainer'
import LoadingQuotes from './components/LoadingQuotes'

const App = () => {
  const [formData, setFormData] = useState({
    value: '',
    readOnlyState: false
  })
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(value){
    setFormData({
      ...formData,
      value: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    setFormData({
      ...formData,
      readOnlyState: true
    })

    getImage()
    
  }

  const getImage = async () => {
    setLoading(true)
    const user = formData.value
    
    const response = await fetch('https://dall-e-63sx.onrender.com/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: user
      })
    });

    const data = await response.json();
    setLoading(false)
    setResult(data.message)
    setFormData({
      ...formData,
      readOnlyState: false
    })
  }
  

  return (
    <>
      <Header 
            formData={formData}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            loading={loading}
      />
      {loading ? <LoadingQuotes />
      :
      result !== '' ? 
        <ImageContainer 
            images={result}
        /> 
        : ''}
    </>
    // <div>

    //   <form onSubmit={(e) => handleSubmit(e)}>

    //     <input 
    //           className='search-field'
    //           type="text" 
    //           placeholder='Type An Image description'
    //           onChange={(e) => handleChange(e.target.value)}
    //           value={formData}
    //     />
    //     <input 
    //           className='submit-btn'
    //           type="submit" 
    //           value='Submit'
    //     />
    //   </form>
       
    //    {loading === false ? <p>Loading...</p> : result.map((item, index) => <Message url={item.url} key={index}/>)}
    // </div>
  )
}

export default App
