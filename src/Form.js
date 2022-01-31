import React, {Component} from "react";



class Form extends Component {
    state = {
        login: "",
        password: "",
        checkbox: false
    }

    handleForm = e => {
        const { value, name, checked, type } = e.target;
        console.log({checked, type});
        this.setState({
            [name]: type === "checkbox" ? checked: value   // якщо type === value  то додаэмо cheked, якщо ні то value
        });
    };
    handeleSubmit = e => {
        e.preventDefault();  //обробник щоб сторінка не оновлювалась
        this.setState({
            login: "", password:""})
    }
    render() {
        const { login, password, checkbox } = this.state;
        return <form onSubmit={this.handeleSubmit}>
            <input type="text"
                name="login"
                placeholder="Login"
                value={login}
                onChange={this.handleForm} />
            <input type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleForm}
            />
            <label>
                Agree
            <input type="checkbox" name="checkbox"  onChange={this.handleForm}  value={checkbox}/>
            </label>

            <select onChange={this.handleForm} name="select">
                <option value=""></option>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
            <button type="submit"> Submit</button>
        </form>;

}
}

 export default Form;