import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        setHover(0);
    }

    return (
        <div className='bg-black min-h-screen flex items-center justify-center'>
            <div className='flex space-x-2'> {/* Adds padding between stars */}
                {
                    Array(noOfStars).fill().map((_, index) => {
                        index += 1;
                        return (
                            <FaStar
                                key={index}
                                onClick={() => handleClick(index)}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                size={40}
                                color={index <= (hover || rating) ? "yellow" : "gray"}
                                className="cursor-pointer"
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default StarRating;
