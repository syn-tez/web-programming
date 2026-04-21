import { useRouteError, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="main_container">
      <Header />
      
      <main className="error_page_content" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        padding: '0 20px'
      }}>
        <h1 className="gradient__text" style={{ fontSize: '10rem', margin: 0 }}>
          404
        </h1>
        <h2 style={{ color: '#fff', marginBottom: '20px' }}>
          Упс! Страница, которую вы ищете, не существует.
        </h2>
        <p style={{ color: '#81AFDD', marginBottom: '30px', maxWidth: '500px' }}>
          Возможно, вы ввели неверный адрес или страница была перемещена. 
          Попробуйте вернуться на главную.
        </p>
        <Link to="/" className="btn primary-btn" style={{ padding: '15px 30px' }}>
          Вернуться на главную
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default Error;