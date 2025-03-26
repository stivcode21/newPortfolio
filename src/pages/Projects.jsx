import ImageSlider from '../components/projects/ImageSlider'
import MainLayout from '../layouts/MainLayout'

const Projects = () => {
    return (
        <MainLayout>
            <div className="padding-x">
                <ImageSlider />
            </div>
        </MainLayout>
    )
}

export default Projects