import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";

const SMSModal = (props) => {
    const { setShowModal } = props;

    const [timer, setTimer] = useState(59);
    const [start, setStart] = useState(false);
    const [otp, setOtp] = useState({
        value1: "",
        value2: "",
        value3: "",
        value4: "",
    });
    const [generatedOtp, setGeneratedOtp] = useState(null); // Состояние для сгенерированного OTP
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Состояние успеха авторизации

    useEffect(() => {
        if (start) {
            const countdown = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer === 55) {
                        const randomOtp = Math.floor(1000 + Math.random() * 9000);
                        setGeneratedOtp(randomOtp); // Сохранение сгенерированного OTP
                        alert(`Ваш OTP код: ${randomOtp}`);
                    }
                    if (prevTimer <= 1) {
                        clearInterval(countdown);
                        return 0;
                    }
                    return prevTimer - 1;
                });
            }, 1000);

            return () => clearInterval(countdown);
        }
    }, [start]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setOtp((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLogin = () => {
        const enteredOtp = `${otp.value1}${otp.value2}${otp.value3}${otp.value4}`;
        if (parseInt(enteredOtp) === generatedOtp) {
            setIsAuthenticated(true);
            alert("Успешный вход!");
            setShowModal("");
        } else {
            alert("Неверный OTP код!");
        }
    };

    return (
        <div className="fixed flex w-full h-[100vh] inset-0 backdrop-blur-sm bg-[#19191966] items-center justify-center">
            <div className="text-center w-[850px] rounded-[24px] relative bg-white py-[40px] px-[20px] shadow-md">
                <button
                    onClick={() => {
                        setShowModal("");
                    }}
                    className="absolute -right-[40px] top-0 text-white text-3xl"
                >
                    <GrClose />
                </button>
                <h2 className="text-[24px] font-semibold mb-[16px]">Код из SMS</h2>
                <p className="text-[#A5A5A5] mb-[20px]">На номер +996 (XXX) XXX-XX-XX</p>
                <div className="w-[240px] mx-auto">
                    <div className="flex justify-center gap-[10px] mb-[20px]">
                        {Object.keys(otp).map((key) => (
                            <input
                                key={key}
                                type="text"
                                name={key}
                                value={otp[key]}
                                onChange={onChange}
                                maxLength={1}
                                className="w-[50px] h-[50px] text-center text-[24px] border border-[#F0F0F0] rounded-[8px] focus:outline-0 focus:border-[#FF7010]"
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleLogin}
                        className="w-full py-[13px] bg-[#FF7010] text-white text-[16px] font-semibold rounded-[16px] mb-[12px]"
                    >
                        Войти
                    </button>
                </div>
                <p
                    onClick={() => {
                        setStart(true);
                        setTimer(59);
                        setOtp({
                            value1: "",
                            value2: "",
                            value3: "",
                            value4: "",
                        });
                    }}
                    className="text-center cursor-pointer text-[#A5A5A5] text-[14px]"
                >
                    Отправить код ещё раз через: {timer.toString().padStart(2, "0")} секунд
                </p>
            </div>
        </div>
    );
};

export default SMSModal;
