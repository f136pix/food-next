import {Translator} from "@/lib/i18n/dictionaries";
import {lazy, Suspense} from "react";

type RegisterPageProps = {
    type: string,
    t: Translator
}

function RegisterPage({type, t}: RegisterPageProps) {
    const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
    const RegisterForm = lazy(() => import(`./_components/${capitalizedType}Form`));

    return (
        <section>
            <Suspense fallback={<div>Loading...</div>}>
                <RegisterForm/>
            </Suspense>
        </section>
    );
}

export default RegisterPage;