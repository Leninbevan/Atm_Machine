import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

function Options() {
    let userName = useSelector(state => state.user.cust_name)
    console.log('userName: ', userName);
    const history = useHistory()
    const { t } = useTranslation();

    return (
        <>
            <Link to='/language'><button className='px-5 py-2 rounded-pill text-white fs-5 button mt-5 ms-5'>{t("Back")}</button></Link>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="w-75 text-center">
                    <p className="text-white fs-2">Welcome back {userName}</p>
                    <div className='d-flex justify-content-center mt-4 w-100'>
                        <div className="servicesDiv">
                            <div className="d-flex gap-5 my-5 servicesButtonDiv">
                                <button className='px-4 py-2 rounded-pill text-white fs-5 button serviceButton' onClick={() => { history.push('/checkBalance') }}>{t("Check Balance")}</button>
                                <button className='px-4 py-2 rounded-pill text-white fs-5 button serviceButton' onClick={() => { history.push('/withdrawal') }}>{t("Cash Withdrawal")}</button>
                            </div>
                            <div className="d-flex my-5 servicesButtonNth2Div">
                                <button className='px-4 py-2 rounded-pill text-white fs-5 button serviceButton' onClick={() => { history.push('/deposit') }}>{t("Cash Deposit")}</button>
                                <button className='px-4 py-2 rounded-pill text-white fs-5 button serviceButton'>{t("Other Services")}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Options