const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Git', 'REST API']

export default function Skills() {
  return (
    <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Yetenekler</h2>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
