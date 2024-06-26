import RegisterForm from "@/components/RegisterForm";
import { DarkModeToggle } from "@/components/ToggleDarkMode";

export default function Home() {
    return (
        <main>
            <div className="fixed right-0 top-0 pr-8 pt-4">
                <DarkModeToggle />
            </div>
            <div className="fixed left-0 top-0 pl-8 pt-4">
                <RegisterForm />
            </div>
        </main>
    );
}
