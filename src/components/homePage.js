import React, { Component } from "react";

 class HomePage extends Component {
    render() {
        return (
            <form>
                <h3>About Us</h3>
                <div >
                <p> Our school's mission is to learn leadership, the common core, and relationships for life. Our mission is to provide a safe, disciplined learning environment that empowers all students to develop their full potential.</p>
    
                </div>
                <button type="submit" ><a  href="/sign-up" >Sign Up</a></button>
                 Already registered<button > <a href="/sign-in">sign in</a>
                </button> <br></br><br></br>
                <form className="btn btn-primary btn-block">
                <div></div><h5>email:school@gmail.com</h5><h5>tel:0787592986</h5><h5>website:www.school.com</h5>

                </form>
            </form>
            
        );
    }
}

export default HomePage;