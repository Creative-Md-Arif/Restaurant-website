// eslint-disable-next-line no-unused-vars

import React from 'react'



class SpecialsSlider extends React.Component {
    render() {
        
        
        const Slider = [
              
            
               {
        
                img: `/public/image_specials_1.png`,
                btn: `VIEW ALL MENU `,
                menuName: `Gazpacho Garlic`,
                menuDesc: `Chilled tomato, cucumber, garlic, red pepper soup.`
                
               },
             
        ];
        return (
            <div>
                <div className='container'>
                    <div>
                       <ul>
                       {
                         Slider.map((menus) => (
                              <li key= {menus}>
                                 <div>
                                    <img src={menus.img} alt="image_specials_1" />
                                    <button>{menus.btn}</button>
                                </div>
                                 <div>
                                    <ul>
                                        <li>
                                            <h3>{menus.menuName}</h3>
                                            <p>{menus.menuDesc}</p>
                                             <div className='flex'>
                                             <p className='border-b border-dashed border-black'></p>
                                             <h6>$60.00</h6>
                                             </div>
                                        </li>
                                    </ul>
                                 </div>
                              </li>
                            ))
                        }
                       </ul>
                    </div>
                </div>
            </div>
          );
    }
 
}

export default SpecialsSlider