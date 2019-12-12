
//Begin class BusinessName
class BusinessName extends React.Component{
constructor(props){
super(props);
}
  render(){
  var styles  = {
textAlign:"left",
padding:"0 0 3px 6px",
lineHeight:"1.9",
fontSize:"1.8em",
color:"#03132B",
marginTop:0
  };
  let element  = (<h2 style={styles} >{this.props.busName} </h2>);
  return element;
  }
}//end class

//Begin class BusinessOwnder
class BusinessOwner extends React.Component{
constructor(props){
super(props);
}
  render(){
  var styles  = {
    width:"70%",
    float:"left",
    paddingLeft:"6px",
    margin:"0"
  };
  let name  = (<h3 style={{margin:"0 0 20px 0"}} >{this.props.owner} </h3>);
  let jobTitle = (
    <div>
    <h4 style={{fontSize:"1.2em",color:"#098fbb", margin:"0 0 5px 0"}}> {this.props.jobTitle}</h4>
    <p style={{marginLeft:10, color:"#666464"}}>{this.props.skils} </p>
     </div>);
  let  element = (<div style={styles}>{name} {jobTitle} </div>);

  return element;
  }
}//end class

//Begin class BusinessLogo
class BusinessLogo extends React.Component{
constructor(props){
  super(props)
}
  render(){
    let styles = {
      float:"right",
      width:"30%",
      margin:0

     };

     let imageStyles = {
       width:150
     };

    let element = (<div className={this.props.name} style={styles}>
      <img style={imageStyles} with={this.props.imgWidth} alt="Business Logo" src={this.props.source} />
       </div>);
    return element;
  }
}//end class

//Begin class ContactsWrapper
class ContactsWrapper extends React.Component{
constructor(props){
  super(props);
}
  render(){
    let styles = {

     };

let  address = (<div style={{float:"left",with:"40%",}}>
   <h4 style={{lineHeight:"5", padding:5, margin:"auto", textAlign:"center"}}>
   {this.props.address} </h4> </div>);


let  contacts = (
  <div style={{float:"right"}}>
<ul>
 <li><strong>Tel:</strong>{this.props.tel}</li>
 <li><strong>Phone:</strong>{this.props.phone}</li>
 <li><strong>Email:</strong>{this.props.email}</li>
 <li><strong>Website:</strong><a href={this.props.website}>{this.props.website}</a></li>
</ul>
  </div>);

    let element = (
      <div className={this.props.name} style={styles}>
        {address}
        {contacts}

       </div>);
    return element;
  }
}//end class



//Begin class Contacts
class Contacts extends React.Component{
constructor(props){
  super(props)
}
  render(){
    let styles = {
    height:"auto",
    width:"95%",
    border:"4px solid #03132B",
    position:"absolute",
    bottom:-25,
    borderRadius:20,
    zIndex:10,
    backgroundColor:"#FFF",
    left:"2.5%"
     };


    let element =
    (<div className={this.props.name} style={styles}>
      <ContactsWrapper
       address = {this.props.address}
       tel = {this.props.tel}
       phone = {this.props.phone}
       email = {this.props.email}
       website = {this.props.website}
        />
      </div>);
    return element;
  }
}//end class

//Begin class CardInfo
class CardInfo extends React.Component{
constructor(props){
  super(props)
}
  render(){
    const bzName = "CodeParl Digital Services";
    let styles = {
borderRadius:20,
height:"auto",
minHeight:270,
width:"100%",
margin:"0 auto",
backgroundColor:"#FFF",
position:"relative"
    };

let logoWrapperStyles= {
width:"100%",
height:"auto",
margin:0,
padding:0


    };
let skls =  "Java | PHP | JavaScript | HTML5 | CSS3 | Python | Android | Database | Web Develper";

let element = (
      <div className={this.props.name} style={styles}>
      <BusinessName busName={bzName} />
      <div className="logoWrapper" style={logoWrapperStyles}>
        <BusinessLogo source="logo.png" imgWidth="100" />
        <BusinessOwner owner="H. A. MUGABO" jobTitle="Full Stack Developer" skils={skls} />
       </div>
      </div>);

    return element;
  }
}//end class


//Begin class InnerWapper
class InnerWapper extends React.Component{
constructor(props){
  super(props)
}
  render(){
    let styles = {
height:"auto",
backgroundColor:"#03132B",
padding:0,
position:"relative"

     };
    let element = (<div className={this.props.name} style={styles}><CardInfo name="CardInfo" />

    <Contacts name="Contacts"
        address = {this.props.address}
        tel = {this.props.tel}
        phone = {this.props.phone}
        email = {this.props.email}
        website = {this.props.website}
      />
     </div>);
    return element;
  }
}//end class


//Begin class Details
class Details extends React.Component{
constructor(props){
  super(props)
}
  render(){
    let styles = {
border:"15px solid #03132B",
borderBottomWidth:"40px",
height:"auto",
margin:"0 auto",
borderRadius:20,
position:"relative",
backgroundColor:"blue",
padding:0
};
    let element = (<div className={this.props.name} style={styles}>
      <InnerWapper name="InnerWapper"
          address = {this.props.address}
          tel = {this.props.tel}
          phone = {this.props.phone}
          email = {this.props.email}
          website = {this.props.website}
        />
       </div>);
    return element;
  }
}//end class


//Begin class Card
class Card extends React.Component{
constructor(props){
  super(props)
}
  render(){
    let styles = {
 width:550,
 height:"auto",
 padding:7,
 margin:"3em auto",
 backgroundColor:"#FFF",
 filter:"drop-shadow(0 0 2px #000)",
 webkitFilter:"drop-shadow(0 0 2px #000)",
 position:"relative"
     };
    let element = (<div className={this.props.name} style={styles}>
      <Details name="Details"
          address = {this.props.address}
          tel = {this.props.tel}
          phone = {this.props.phone}
          email = {this.props.email}
          website = {this.props.website}
       /></div>);
    return element;
  }
}//end class

var items  = ['1','2','3'];

function  print(a,b,c){
  console.log(a+ ' '+b+' '+c);
}

print(...items);
//output the business card
ReactDOM.render(<Card name="Card" address="South-B Nairobi - Kenya"    phone = "+25495372467" tel="254208000976"  email="cybarox@gmail.com" website="www.services.codeparl.com"/>,
document.querySelector(".cards"));
