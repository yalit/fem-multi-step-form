import thankYouIcon from '../../assets/images/icon-thank-you.svg';

export function ConfirmationStep() {
    return (
        <>
            <div className="h-full flex flex-col gap-2 justify-center items-center">
                <img src={thankYouIcon} alt="Thank you" className="w-20 h-20 mb-6"/>
                <div className="text-2xl font-bold text-blue-900 mb-2">Thank you !</div>
                <div className="text-gray-400 font-medium text-sm text-center px-10">
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                </div>
            </div>
        </>
    )
}
