
interface Props {
    imageUrl: string;
    title?: string;
    tags?: string;
    imgWidth?: string;
    imgHeight?: string;
}


function GalleryItem({ imageUrl, title, tags, imgWidth='20em', imgHeight='20em' } : Props) {
  return (
    <div className="projectImage" style={{ width: imgWidth, height: imgHeight }}>
        <div className="image"><img src={imageUrl} alt={""}/></div>
        <h1 className="title">{title}</h1>
        <p>{tags}</p>
    </div>
  );
}

export default GalleryItem;
