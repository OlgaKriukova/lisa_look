 import "./Form.scss";

 import Header from "../../components/Header/Header";
 import Footer from "../../components/Footer/Footer";

const Form: React.FC = () => {

    return(
        <>
        <Header />
        <section className="form">
            <h2 className="form__title">Анкета клиента</h2>
            <form className="form__container" 
                action="mailto:html@yandex.ru" // Ключевое слово mailto: позволяет отправить что угодно на электронную почту. 
                //Не забудьте добавить атрибут enctype="text/plain" тегу <form>, чтобы письмо отображалось корректно
                encType="text/plain"
                // method="post"
                autoComplete="on">
                <fieldset className="form__field-text">
                    <legend className="form__title-text">Ваше имя</legend>
                    <input 
                        id="name"
                        type="text" 
                        name=""
                        formNoValidate
                        className="form__input-text"
                        maxLength={230}
                        // placeholder="Ваше имя"
                        />
                </fieldset>
                <fieldset className="form__field-radio">
                    <legend className="form__title-radio">Что вы чаще хотите носить:</legend>
                    <label className="form__label-box">
                        <input className="form__input-radio"  type="radio" name="dress" />
                        <p className="form__label">юбки/платья</p> 
                    </label>
                        
                    <div className="form__label-box">
                        <input className="form__input-radio" type="radio" name="jeans"  />
                        <p className="form__label">брюки/джинсы</p>
                    </div>
                        
                </fieldset>
                <fieldset className="form__field-checkbox">
                    <legend className="form__title-checkbox">Что цените в одежде больше всего?</legend>
                    <label className="form__label-box">
                        <input className="form__input-checkbox" type="checkbox" />
                        <p className="form__label">удобство и комфорт</p>
                    </label>
                    
                    <label className="form__label-box">
                        <input className="form__input-checkbox" type="checkbox" />
                        <p className="form__label">красоту и необычность</p>
                    </label>
                    <label className="form__label-box">
                        <input className="form__input-checkbox" type="checkbox" />
                        <p className="form__label">чтобы она была в тренде</p>
                    </label>
                    <label className="form__label-box">
                        <input className="form__input-checkbox" type="checkbox" />
                        <p className="form__label">чтобы одежда привлекала внимание</p>
                    </label>
                    <label className="form__label-box">
                        <input className="form__input-checkbox" type="checkbox" />
                        <p className="form__label">чтобы мне подходила</p>
                    </label>
                    <fieldset className="form__field-text">
                        <legend className="form__title-text">Ваш вариант</legend>
                        <textarea 
                            id="alt"
                            name=""
                            rows={4}
                            className="form__input-text form__input-text-alt"
                            />
                </fieldset>

                </fieldset>


                
                <button className="form__button" type="submit">Отправить</button>
            </form>
        </section>
        <Footer />
        </>
    )
};

export default Form;