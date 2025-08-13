
import Pro_inscription from "./process.inscription"
import Pro_invitation from "./process.invitation"
import Pro_onboarding from "./process.onboarding"
import Pro_verification from "./process.verification"
function Progress() {
    return (
        <section>
            <div className="flex flex-col h-screen justify-between">
                <div className="flex-col  justify-center items-center">
                    <Pro_inscription />
                    <div className="border-2 w-0 h-20 ml-6"></div>
                    <Pro_verification />
                    <div className="border-2 w-0 h-20 ml-6"></div>
                    <Pro_invitation />
                    <div className="border-2 w-0 h-20 ml-6"></div>
                    <Pro_onboarding />
                </div>
                <div className="flex justify-between items-center m-5">
                    <a className="flex items-center text-[#00539C]" href="#"><img src="/flèche_bleu.svg" alt="flèche_bleu" /> vos details</a>
                    <a className="text-[#00539C]" href="#">Signin</a>
                </div>
            </div>
        </section>
    )
}
export default Progress