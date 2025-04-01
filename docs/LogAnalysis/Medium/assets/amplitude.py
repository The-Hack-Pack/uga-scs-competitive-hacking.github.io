# Open the input file and output file
with open("ichika-nito.log", "r") as infile, open("amplitude.txt", "w") as outfile:
    # Skip the header lines
    for line in infile:
        # Check if the line contains valid data (ignores header and separator)
        if line.startswith("|") and not line.startswith("|------------|"):
            # Split the line based on the delimiter "|"
            parts = line.split("|")
            # Extract the amplitude and strip any whitespace
            amplitude = parts[4].strip()
            # Write the amplitude to the output file
            outfile.write(amplitude + "\n")

