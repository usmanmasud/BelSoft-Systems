import Socials from "./Socials"
import Form from "./Form"

export default function Contact1() {
    return <div className="h-[325px] lg:w-[50%]">
        <p className=" text-[#474747] mb-6 leading-6.5 font-Poppins lg:w-[80%]text-lg">
            Let's create something extraordinary together. Whether you have a project in mind or just want to chat, feel free to reach out!
        </p>
        <Socials />
        <Form />
    </div>
}