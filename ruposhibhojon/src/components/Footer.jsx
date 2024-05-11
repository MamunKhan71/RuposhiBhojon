const Footer = () => {
    return (
        <div className="mt-auto bg-base-200 text-base-content">
            <footer className="footer p-10 bg-base-200 text-base-content container mx-auto justify-between">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Address</h6>
                    <h1>Road 04, Block D, Mirpur 01, Mirpur, Dhaka</h1>
                    <iframe
                    height={100}
                        className="rounded-xl shadow-sm"
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4258.471041413782!2d90.35589153306954!3d23.79909566596411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sroad%2001%20block%20d%20mirpur%201!5e0!3m2!1sen!2sbd!4v1715462989432!5m2!1sen!2sbd"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </form>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300  container mx-auto">
                <aside className="items-center grid-flow-col">
                    <img className="w-16" src="./src/assets/footerlogo.png" alt="" />
                    <div className="flex flex-col">
                        <span className="font-bold text-lg">RuposhiBangla </span>
                        <span className="font-medium">All rights reserved by &copy; <a className="font-bold" href="https://www.fb.com/mkmamun111" target="_blank"> Md.Mamun</a> | Copyright @ <span className="font-bold">{new Date().getFullYear()}</span></span>
                    </div>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div >
    );
};

export default Footer;