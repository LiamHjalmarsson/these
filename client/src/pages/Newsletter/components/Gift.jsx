import Image from "../../../components/Elements/Image";
import image from "/images/man.jpg"
import { FaQuestion } from "react-icons/fa6";

const Gift = ({ gift, handleGiftSelection, selected, submitted }) => {

    let handleClick = () => {
        if (!submitted) {
            handleGiftSelection(gift);
        }
    };

    return (
        <li className={`group w-80 h-sm max-h-[400px] cursor-pointer`} onClick={handleClick}>
            <div className='flex items-center text-xl h-80 rounded-md shadow-middle relative shadow-primary bg-opacity-90 bg-primary'>
                <div className='h-full w-full overflow-hidden shadow-middle shadow-primary rounded-md absolute'>
                    <Image img={image} custom='group-hover:scale-105 group-hover:opacity-90 w-full h-full object-cover' />
                </div>
                <div className={`${selected ? " bg-opacity-90 text-8xl" : "bg-primary"} ${submitted && selected ? "opacity-0" : "opacity-100"} bg-primary group-hover:text-8xl w-full h-full flex justify-center items-center text-white font-bold text-7xl rounded-md z-10 transtion duration-300`}>
                    <FaQuestion />
                </div>
                {
                    selected && submitted && (
                        <div className=' absolute -bottom-5 p-4 text-center left-10 bg-white rounded-md shadow-middle shadow-primary'>
                            {
                                selected ? "Gåva: " + gift.category : null
                            }
                        </div>
                    )
                }
            </div>
        </li>
    );
};


export default Gift;
