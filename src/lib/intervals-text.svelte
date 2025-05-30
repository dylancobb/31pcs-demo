<section
	class="3xl:w-7xl mx-auto flex w-full flex-col gap-6 px-4 pt-12 sm:px-8 md:gap-12 lg:w-4xl xl:w-5xl 2xl:w-6xl"
>
	<div
		class="flex w-full flex-col gap-4 border-4 border-stone-400 bg-stone-600 p-8 text-white shadow-[7px_7px_0_0_var(--color-stone-500)]"
	>
		<h2 class="text-lg sm:text-xl lg:text-2xl xl:text-3xl">Intervals</h2>
		<ul class="list-[square] pl-4 text-sm lg:text-base xl:text-lg">
			<li>
				Let M and N be the <span
					class="underline decoration-stone-200 decoration-dotted underline-offset-4 sm:underline-offset-5 xl:underline-offset-6"
					>31-tone pitch-class numbers</span
				>
				(ordered in fifths such that Gbb = 0, F# = 1, Gb = 2 etc.) of two notes:
				<ul class="list-[square] pl-4">
					<li>
						M and N are congruent modulo 12 if and only if they are enharmonically equivalent.
					</li>
					<li>
						M and N are congruent modulo 7 if and only if they are variants of the same letter /
						scale degree.
					</li>
				</ul>
			</li>
			<li>
				To exactly determine an interval between M and N:
				<ul class="list-[square] pl-4">
					<li>
						<span class="text-red-400">(</span><span class="text-amber-400">M</span> -
						<span class="text-amber-400">N</span><span class="text-red-400">)</span> *
						<span class="text-amber-400">4</span> modulo <span class="text-amber-400">7</span> gives
						the
						<span
							class="underline decoration-stone-200 decoration-dotted underline-offset-4 sm:underline-offset-5 xl:underline-offset-6"
							>generic size</span
						>
						of the interval in steps.
						<ul class="list-[square] pl-4">
							<li>
								This value is <span
									class="underline decoration-stone-200 decoration-dotted underline-offset-4 sm:underline-offset-5 xl:underline-offset-6"
									>0-indexed</span
								>, such that 0 represents unisons, 1 represents seconds, 2 represents thirds etc.
							</li>
							<li>
								Many languages like JavaScript do not use a true modulo operator, in which case the
								following works:<br />
								<span class="text-red-400">((((</span><span class="text-amber-400">M</span> -
								<span class="text-amber-400">N</span><span class="text-red-400">)</span> *
								<span class="text-amber-400">4</span><span class="text-red-400">)</span> %
								<span class="text-amber-400">7</span><span class="text-red-400">)</span> +
								<span class="text-amber-400">7</span><span class="text-red-400">)</span> %
								<span class="text-amber-400">7</span>
							</li>
						</ul>
					</li>
					<li>
						The specific quality of the interval can be calculated directly from the value of <span
							class="text-amber-400">M</span
						>
						- <span class="text-amber-400">N</span> using the following table:
					</li>
				</ul>
			</li>
			<table
				class="3xl:text-lg mx-auto mt-4 min-w-max bg-stone-300 text-center align-middle text-xs text-black shadow-[5px_5px_0_0_var(--color-stone-800)] xl:text-sm 2xl:top-8 2xl:text-base"
			>
				<tbody>
					<tr class="3xl:h-8 h-6 bg-stone-400 2xl:h-7">
						<td colspan="2">etc.</td>
					</tr>
					<tr class="3xl:h-8 h-6 2xl:h-7">
						<td class="px-4">13 to 19</td><td class="bg-rose-300 px-4">Doubly Augmented</td>
					</tr>
					<tr class="3xl:h-8 h-6 2xl:h-7">
						<td class="px-4">6 to 12</td><td class="bg-red-200 px-4">Augmented</td>
					</tr>
					<tr class="3xl:h-8 h-6 2xl:h-7">
						<td class="px-4">2 to 5</td><td class="bg-orange-100 px-4 text-black">Major</td>
					</tr>
					<tr class="3xl:h-8 h-6 2xl:h-7">
						<td class="px-4">-1 to 1</td><td class="bg-green-50 px-4 text-black">Perfect</td>
					</tr>
					<tr class="3xl:h-8 h-6 2xl:h-7">
						<td class="px-4">-5 to -2</td><td class="bg-cyan-100 px-4 text-black">Minor</td>
					</tr>
					<tr class="3xl:h-8 h-6 2xl:h-7">
						<td class="px-4">-12 to -6</td><td class="bg-blue-200 px-4 text-black">Diminished</td>
					</tr>
					<tr class="3xl:h-8 h-6 2xl:h-7">
						<td class="px-4">-19 to -13</td><td class="bg-indigo-300 px-4 text-black"
							>Doubly Diminished</td
						>
					</tr>
					<tr class="3xl:h-8 h-6 bg-stone-400 2xl:h-7">
						<td colspan="2">etc.</td>
					</tr>
				</tbody>
			</table>
		</ul>
	</div>
</section>
