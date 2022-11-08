import './tag.css'


const Tag = (props) => {
      return (
            <span className="tag" key={props.id}>
                  {props.text}
            </span>
      )

}
export default Tag;

