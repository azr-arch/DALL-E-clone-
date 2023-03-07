import React from 'react'
import { Oval } from 'react-loader-spinner'
const Header = ( { handleSubmit, handleChange, formData, loading } ) => {
  
  return (
    <div className='header'> 
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='form-style-container'>
                    <input 
                            className='search-field'
                            type="text" 
                            placeholder='An Impressionist oil painting of sunflowers in a purple vase...'
                            onChange={(e) => handleChange(e.target.value)}
                            value={formData.value}
                            readOnly={formData.readOnlyState}
                    />
                    <div className={`submit-btn-container ${formData.value.length > 0 && formData.readOnlyState === false? 'active': ''}`}>
                        <button className='submit-btn' > {
                                  loading ? 
                                  <Oval height={22} color='#999'  strokeWidth={4} strokeWidthSecondary={4} secondaryColor='#fff'/> 
                                  : 'Generate'} 
                        </button>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default Header