import React from 'react';

const Main = () => {
    return (

        <div>


<div className="w3-top">
  <div className="w3-row w3-padding w3-black">
    <div className="w3-col s3">
      {/* <a href="#home" className="w3-button w3-block w3-black">HOME</a> */}
    </div>
    <div className="w3-col s3">
      <a href="#about" className="w3-button w3-block w3-black">ABOUT</a>
    </div>
    <div className="w3-col s3">
      <a href="#menu" className="w3-button w3-block w3-black">MENU</a>
    </div>
    <div className="w3-col s3">
      <a href="#where" className="w3-button w3-block w3-black">WHERE</a>
    </div>
  </div>
</div>


<header className="bgimg w3-display-container w3-grayscale-min" id="home">
    <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
        <span className="w3-tag">Coming Soon</span>
    </div>
    
    <div className="w3-display-middle w3-center">
        <span className="w3-text-white">the<br/>Cafe</span>
    </div>
    
    <div className="w3-display-bottomright w3-center w3-padding-large">
        <span className="w3-text-white">15 Adr street, 5015</span>
    </div>
</header>


<div className="w3-sand w3-grayscale w3-large">


<div className="w3-container" id="about">
  <div className="w3-content">
    <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">TAMARA's PROFILE --  TOTALLY IN CONSTRUCTION</span></h5>
    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
    <div className="w3-panel w3-leftbar w3-light-grey">
      <p><i>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</i></p>
      <p>whatever is here</p>
    </div>
    <img src="/assets/images/coffeeshop.jpg" className="w3-margin-top" alt="coffeeshop"></img>
    <p><strong>Email:</strong> xx</p>
    <p><strong>Address:</strong> xxx</p>
  </div>
</div>


<div className="w3-container" id="menu">
  <div className="w3-content">
 
    <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">THE MENU</span></h5>
  
    <div className="w3-row w3-center w3-card w3-padding">
      {/* <a href="#" id="myLink">
        <div className="w3-col s6 tablink">Eat</div>
      </a> */}
      {/* <a href="#" >
        <div className="w3-col s6 tablink">Drink</div>
      </a> */}
    </div>

    <div id="Eat" className="w3-container menu w3-padding-48 w3-card">
      <h5>Bread Basket</h5>
      <p className="w3-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p><br/>
    
      <h5>Honey Almond Granola with Fruits</h5>
      <p className="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br/>
    
      <h5>Belgian Waffle</h5>
      <p className="w3-text-grey">Vanilla flavored batter with malted flour 7.50</p><br/>
    
      <h5>Scrambled eggs</h5>
      <p className="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br/>
    
      <h5>Blueberry Pancakes</h5>
      <p className="w3-text-grey">With syrup, butter and lots of berries 8.50</p>
    </div>

    <div id="Drinks" className="w3-container menu w3-padding-48 w3-card">
      <h5>Coffee</h5>
      <p className="w3-text-grey">Regular coffee 2.50</p><br/>
    
      <h5>Chocolato</h5>
      <p className="w3-text-grey">Chocolate espresso with milk 4.50</p><br/>
    
      <h5>Corretto</h5>
      <p className="w3-text-grey">Whiskey and coffee 5.00</p><br/>
    
      <h5>Iced tea</h5>
      <p className="w3-text-grey">Hot tea, except not hot 3.00</p><br/>
    
      <h5>Soda</h5>
      <p className="w3-text-grey">Coke, Sprite, Fanta, etc. 2.50</p>
    </div>  
    {/* <img src="./assets/images/coffeeshop.jpg" style={{width:100 + "%", maxWidth:1000 + "px", marginTop:32 + "px"}} alt="coffeeshop"></img> */}
  </div>
</div>


<div className="w3-container" id="where">
  <div className="w3-content">
    <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">WHERE TO FIND US</span></h5>
    <p>Find us at some address at some place.</p>
    {/* <img src="/w3images/map.jpg" className="w3-image" style="width:100%"> */}
    <p><span className="w3-tag">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
    <p><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
    <form>
      <input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"/>
      <input className="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required name="People"/>
      <input className="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" value="2020-11-16T20:00"/>
      <input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="Message"/>
      <button className="w3-button w3-black" type="submit">SEND MESSAGE</button>
    </form>
  </div>
</div>


</div>


<footer className="w3-center w3-light-grey w3-padding-48 w3-large">
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" rel="noreferrer" title="W3.CSS" target="_blank" className="w3-hover-text-green">w3.css</a></p>
</footer>


</div>
        
    )
}

export default Main

