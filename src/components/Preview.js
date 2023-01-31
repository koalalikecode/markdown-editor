import '../style/Preview.css'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

function Preview() {
    function handlePreview() {
        document.querySelector('.main').classList.toggle('preview-active')
    }
    return (
        <div className="preview">
            <div className="preview-header">
                PREVIEW
                <AiOutlineEye className="preview-icon" onClick={handlePreview}/>
                <AiOutlineEyeInvisible className="invi-preview-icon" onClick = {handlePreview}/>
            </div>
            <div className="preview-content">
                
            </div>
        </div>
    )
}

export default Preview