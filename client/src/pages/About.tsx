const features = [
  { name: "Origin", description: "Lorem ipsum dolor sit amet." },
  { name: "Meaning", description: "Lorem ipsum dolor sit amet." },
  { name: "History", description: "Lorem ipsum dolor sit amet." },
  { name: "Finish", description: "Lorem ipsum dolor sit amet." },
  { name: "Includes", description: "Lorem ipsum dolor sit amet." },
  { name: "Considerations", description: "Lorem ipsum dolor sit amet." },
];

export default function Example() {
  return (
    <div
      id="about"
      className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 min-h-screen"
    >
      <div className="text-center">
        <div className="w-2/3 mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-6xl">
            opera
          </h2>
          <p className="mt-4 text-gray-500 text-xl">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            veniam sapiente commodi nisi molestiae voluptatum libero incidunt
            odio placeat facilis.
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900 text-xl">
                {feature.name}
              </dt>
              <dd className="mt-2 text-lg text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
