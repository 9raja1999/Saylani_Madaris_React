import Input from "../components/Input/Input"

function ContactUs() {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitter")
    }
    return(
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                <br />
                <Input
                    name="phone"
                    type="number"
                    placeholder="Enter your phone"
                    required
                />
                <br />
                <Input
                    name="meesage"
                    type="text"
                    placeholder="Enter your meesage"
                    required
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs