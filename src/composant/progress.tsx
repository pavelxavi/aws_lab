
import Pro_inscription from "./process.inscription"
import Pro_invitation from "./process.invitation"
import Pro_onboarding from "./process.onboarding"
import Pro_verification from "./process.verification"
function Progress() {
    return (
        <section>
            <div className="ml-32 mb-10">
                <img src="/IT ingeniery.svg" alt="IT ingeniery" />
            </div>
            <div className="flex-col  justify-center items-center m-5">
                <Pro_inscription/>
                <div className="border-2 w-0 h-14 ml-6"></div>
                <Pro_verification/>
                <div className="border-2 w-0 h-14 ml-6"></div>
                <Pro_invitation/>
                <div className="border-2 w-0 h-14 ml-6"></div>
                <Pro_onboarding/>
            </div>
        </section>
    )
}
export default Progress