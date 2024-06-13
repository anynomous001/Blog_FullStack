import React from 'react'

const QuoteComponent = () => {
    return (
        <div className="hidden md:flex bg-slate-200 h-screen  justify-center flex-col">
            <div className="flex justify-center">
                <div className="max-w-lg">
                    <div className="text-3xl font-bold">
                        "The customer support I received was exceptional. The support team went above and beyond to address my concerns"
                    </div>
                    <div className="max-w-md text-xl font-semibold text-left mt-4">
                        Julies Winfield
                    </div>
                    <div className="max-w-md text-sm font-light text-slate-400">
                        CEO | Acme corp
                    </div>
                </div>
            </div>

        </div>
    )
}

export default QuoteComponent