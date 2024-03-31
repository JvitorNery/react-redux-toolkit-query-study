import {GoTrashcan} from 'react-icons/go';
import ExpandablePanel from './ExpandablePanel'
import Button from './Button';
import { useRemoveAlbumMutation } from '../store';
import PhotosList from './PhotosList';

function AlbumslistItem({album}) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleClick = () => {
        removeAlbum(album)
    };

    const header = <>
        <Button className="mr-3" loading={results.isLoading} onClick={handleClick}>
            <GoTrashcan />
        </Button>
        {album.title}
        </>;

    return (
        <ExpandablePanel header={header}>
            <PhotosList album={album} />
        </ExpandablePanel>
    );

}

export default AlbumslistItem;