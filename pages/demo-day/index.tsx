import type { NextPage } from "next"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import DemoDay from "../../components/Pages/DemoDay"
import styles from "../../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <DefaultLayout>
        <DemoDay />
      </DefaultLayout>
    </div>
  )
}

export default Home
