import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

const InstagramPost = (props) => {
    return <div>
        <h2>Latest Post</h2>
        <InstagramEmbed
            url={props.url}
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => { }}
            onSuccess={() => { }}
            onAfterRender={() => { }}
            onFailure={() => { }}
        />
    </div>
}

export default InstagramPost