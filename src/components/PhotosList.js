import { useFetchPhotosQuery, useAddPhotosMutation } from "../store";
import Button from './Button';
import Skeleton from "./Skeleton";
import ExpandablePanel from './ExpandablePanel';
import PhotosListItem from "./PhotosListItem";

export function PhotosList({album}) {
    const {data, error, isFetching} = useFetchPhotosQuery(album);
    const [addPhoto, results] = useAddPhotosMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    }

    let content;

  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />
    })
  }


    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos in {album.title}</h3>
                <Button loading={results.isLoading} onClick={handleAddPhoto}>
                    + Add Photo
                </Button>
            </div>
            <div className="mx-8 flex flex-row flex-wrap justify-center">
                {content}
            </div>
        </div>
    );
}

export default PhotosList;