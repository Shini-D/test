const PrivacySection = ({title, texts}) => {
  return (
    <section className="num-increment mb-6 lg:mb-10 last:mb-0">
        <h2 className="h4 text-white before:num-result mb-4">{title}</h2>
        {texts.map((p, index) => (
            <p key={index} className="mb-3 last:mb-0">{p}</p>
        ))}
    </section>
  )
}

export default PrivacySection