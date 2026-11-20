const root = ReactDOM.createRoot(document.getElementById("root"));

//Add props first, then content here
function FunctionComponent(props){
   return <h1>{props.title}</h1>;
}

class ClassComponent extends react.Component{
   render(){
      let Tag = "h" + this.props.size;
      return <Tag>This is the Second Part</Tag>;
   }
}

let page = <>
   <FunctionComponent title="Hello"/>
   <ClassComponent size="2"/>
</>;

root.render(page);
