import requests
import pandas as pd
import os
import time

def fetch_data_and_append_to_csv():
    url = 'https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%20TOTAL%20MARKET'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        # Add any other necessary headers
    }

    try:
        response = requests.get(url, headers=headers)
        data = response.json()
        print(data)

        # Extract timestamp
        timestamp = data.get('timestamp', '')

        # Extract data for symbols
        symbols_data = data.get('data', [])
        columns = [
        'symbol', 'identifier', 'open', 'dayHigh', 'dayLow', 'lastPrice', 'previousClose', 'change', 'pChange',
        'ffmc', 'yearHigh', 'yearLow', 'totalTradedVolume', 'totalTradedValue', 'lastUpdateTime', 'nearWKH',
        'nearWKL', 'perChange365d', 'date365dAgo', 'chart365dPath', 'date30dAgo', 'perChange30d', 'chart30dPath',
        'chartTodayPath', 'series', 'meta'
        ]

        # Initialize DataFrame with specified columns
        df = pd.DataFrame(columns=columns)

        # Iterate over the keys of the first dictionary in symbols_data
        for key in symbols_data[0].keys():
            # Extract values for the current key and append them to the DataFrame
            df[key] = [d[key] for d in symbols_data]

        # Add a 'timestamp' column
        df['timestamp'] = timestamp
        print(timestamp)
        print(df.head())

        # Check if the CSV file exists and is non-empty
        if os.path.exists('api_data_1.csv'):
            # Append DataFrame to CSV file without writing headers
            df.to_csv('api_data_1.csv', mode='w', header=True, index=False)
        else:
            # Save DataFrame to CSV file with headers
            df.to_csv('api_data_1.csv', index=False)

    except requests.RequestException as e:
        pass

# Continuously call the API every 30 seconds
while True:
    fetch_data_and_append_to_csv()
    # time.sleep(30)  # Sleep for 30 seconds before next API call