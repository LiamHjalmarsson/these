import image from "/images/man.jpg"
import { FaQuestion } from "react-icons/fa6";

const Gift = ({ gift, index, handleGiftSelection, selected, submitted }) => {
    let handleClick = () => {

        if (!submitted) {
            handleGiftSelection(index);
        }
    };

    return (
        <li className={`group w-80 h-sm max-h-[600px]`} onClick={handleClick}>
            <div className='flex items-center text-xl h-96 rounded-md shadow-middle relative shadow-black bg-opacity-90 bg-primary'>
                <img src={image} className='w-full h-full object-cover shadow-black rounded-md absolute' />
                <div className={`${selected ? "bg-amber-600" : "bg-primary"} ${submitted && selected ? "opacity-0" : "opacity-100"} w-full h-full flex justify-center items-center text-white font-bold text-7xl rounded-md z-10 transtion duration-300`}>
                    <FaQuestion />
                </div>
                <div className=' absolute bottom-0 p-4 text-center w-full bg-white rounded-b-md'>
                    {selected ? "Överaskning " + gift.category : null}
                </div>
            </div>
        </li>
    );
};


export default Gift;
