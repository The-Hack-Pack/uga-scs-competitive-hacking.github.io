# Extract times from 'stocks.log' and write to 'time.txt'
with open('ichika-nito.log', 'r') as infile, open('time.txt', 'w') as outfile:
    for line in infile:
        # Skip header lines or any lines that don't contain data
        if line.strip().startswith('|') and len(line.strip().split('|')) > 2:
            # Extract the time value
            time_value = line.strip().split('|')[1].strip()
            # Write the time to the output file
            outfile.write(time_value + '\n')

# Open the input file and output file
with open("ichika-nito.log", "r") as infile, open("ticker.txt", "w") as outfile:
    # Skip the header lines
    for line in infile:
        # Check if the line has stock data
        if line.startswith("|"):
            # Split the line based on the delimiter "|"
            parts = line.split("|")
            # Extract the ticker and strip any whitespace
            ticker = parts[2].strip()
            # Write the ticker to the output file
            outfile.write(ticker + "\n")

# Open the input file and output file
with open("ichika-nito.log", "r") as infile, open("price.txt", "w") as outfile:
    # Skip the header lines
    for line in infile:
        # Check if the line has stock data
        if line.startswith("|"):
            # Split the line based on the delimiter "|"
            parts = line.split("|")
            # Extract the price and strip any whitespace
            price = parts[3].strip()
            # Write the price to the output file
            outfile.write(price + "\n")

# Open the input file and output file
with open("ichika-nito.log", "r") as infile, open("change.txt", "w") as outfile:
    # Skip the header lines
    for line in infile:
        # Check if the line has stock data
        if line.startswith("|"):
            # Split the line based on the delimiter "|"
            parts = line.split("|")
            # Extract the change and strip any whitespace
            change = parts[4].strip()
            # Write the change to the output file
            outfile.write(change + "\n")

