import AudioPlayer from './AudioPlayer'
import NoSsr from './NoSsr'

const Media = () => {
    return (
        <div className="
            fixed right-0 bottom-0 w-1/4 h-1/4 border-blue-700 border-4 bg-green-400
        ">
            <NoSsr>
                <AudioPlayer />
            </NoSsr>
        </div>
    )
}
// <AudioPlayer />

export default Media