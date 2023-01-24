// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {item, onUpdatedList} = props
  const {thumbnailUrl, thumbnailAltText} = item

  const onUpdate = () => {
    const {id} = item
    onUpdatedList(id)
  }
  return (
    <li>
      <button type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} onClick={onUpdate} />
      </button>
    </li>
  )
}

export default ThumbnailItem
