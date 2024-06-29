import Typewriter from 'typewriter-effect';

const TypewriterEffect = () => {
    <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString('Hello World!')
            .callFunction(() => {
                console.log('String typed out!');
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
                console.log('All strings were deleted');
            })
            .start();
        }}
    />
}

export default TypewriterEffect;