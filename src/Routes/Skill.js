import React from 'react'
import '../filesCss/skill.css'
export default function Skill() {
  return (
    <div>
        <h3 className='heading'>SKILLS</h3>
      <nav>
        <ul className='skill'>
          <div>
         <li><img src=".\Images\html.png" alt="" width={50}/><p className='html'>HTML &lt;h3&gt; used for the "SKILLS" heading.&lt;ul&gt;,&lt;li&gt; used for listing the elements and &lt;img&gt; used for adding the icon.&lt;p&gt; used to write here</p></li>
         
         </div>
         <div>
         <li><img src=".\Images\css.png" alt="" width={50}/><p>CSS - border-radius,border,width , display,justify-containt used for creating this container. hover used for the effect</p></li>
         
         </div>
         <div>
         <li><img src=".\Images\javascript.png" alt="" width={50}/><p>JAVASCRIPT - Returning this Whole jSX under a function & exporting it back to the main js file, and also importing it in the main js file</p></li>
         
         </div>
         <div>
         <li><img src=".\Images\react.png" alt="" width={50}/><p>REACT - Used import React from 'React' to write JSX and export default to export the function to the main JS file</p></li>
         
         </div>
         <div>
         <li><a href=""><img src=".\Images\bootstrap.png" alt="" width={50}/></a><p>Bootstrap - As i wanted to have custom design, No bootstrap added</p></li>
         
         </div>
        </ul>
        
      </nav>
    </div>
  )
}
