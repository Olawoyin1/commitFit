import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-border py-12 bg-background">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-bold tracking-tight text-primary">C</span>
                            <span className="text-xl font-bold tracking-tight">CommitFit</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Miss the gym. Pay the price.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#how-it-works" className="hover:text-foreground">How it Works</a></li>
                            <li><a href="#features" className="hover:text-foreground">Features</a></li>
                            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-foreground">Dispute Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4 text-muted-foreground">
                            <a href="#" className="hover:text-foreground"><FaTwitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-foreground"><FaInstagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-foreground"><FaLinkedin className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
                    <p>© 2025 CommitFit. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex gap-4">
                        <span>Built for discipline.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
