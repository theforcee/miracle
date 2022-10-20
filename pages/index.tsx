import type { NextPage } from "next"
import DefaultLayout from "../components/Layouts/DefaultLayout"
import LandingPage from "../components/Pages/LandingPage"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <DefaultLayout>
        <LandingPage />
      </DefaultLayout>
    </div>
  )
}

export default Home
