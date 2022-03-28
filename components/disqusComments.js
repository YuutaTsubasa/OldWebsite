import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ url, identifier, title }) => {
  const disqusShortname = "yuuta-tsubasa"
  const disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
    language: 'zh_TW'
  }
  return (
    <DiscussionEmbed
    shortname={disqusShortname}
    config={disqusConfig}
    />
  )
}
export default DisqusComments;