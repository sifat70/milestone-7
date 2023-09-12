import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Boolmarks = ({bookmarks, readingTime}) => {
    
    return (
        <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-3'>
            <div>
                <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};


Boolmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Boolmarks;