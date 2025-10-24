'use client'

type CalendlyEmbedProps = {
  url: string
  title?: string
  height?: number
}

export default function CalendlyEmbed({
  url,
  title = 'Signature Calibration Session',
  height = 720,
}: CalendlyEmbedProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-signature-gray/30 bg-white shadow-lg">
        <iframe
          title={title}
          src={`${url}?hide_event_type_details=1&hide_gdpr_banner=1`}
          width="100%"
          height={height}
          frameBorder="0"
        />
      </div>
    </div>
  )
}

