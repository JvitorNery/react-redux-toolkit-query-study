import { useRemovePhotosMutation } from '../store';
import { GoTrashcan } from 'react-icons/go';

export function PhotosListItem({photo}) {
    const [removePhoto, results] = useRemovePhotosMutation();
    
    const handleDeletePhoto = () => {
        removePhoto(photo);
    }

    return <div className="relative m-2">
        <img className="h-20 w-20" src={photo.url} alt="random picture"/>
        <div className='absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80' onClick={handleDeletePhoto}>
            <GoTrashcan className="text-3xl"/>
        </div>
    </div>;
}

export default PhotosListItem;