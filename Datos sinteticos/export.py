import pandas as pd
import random
from datetime import datetime, timedelta

# --------------------------------
# CONFIGURACION
# --------------------------------
NUM_REGISTROS = 1000

patient_names = [
    "Ana Garcia", "Carlos Mendoza", "Laura Perez", "Juan Rodriguez",
    "Maria Lopez", "Andres Torres", "Sofia Ramirez", "Pedro Castillo"
]

occupations = [
    "Graphic Designer", "Sales Manager", "Engineer",
    "Teacher", "Psychologist", "Entrepreneur", "Data Analyst"
]

clinical_focus = [
    "Stress Management",
    "Executive Coaching",
    "Emotional Regulation",
    "Burnout Prevention",
    "Leadership Development"
]

emotions = [
    "Stress", "Anxiety", "Overwhelm",
    "Relief", "Motivation", "Doubt",
    "Ambition", "Fatigue"
]

risk_details = [
    "Burnout",
    "Chronic Anxiety",
    "Mild Depression",
    ""
]

session_summaries = [
    "Patient reports high stress due to workload.",
    "Session focused on emotional regulation strategies.",
    "Patient shows improvement after behavioral changes.",
    "Discussion about leadership challenges.",
    "Signs of fatigue with positive engagement."
]

# --------------------------------
# GENERACION DE DATOS
# --------------------------------
data = []

start_date = datetime(2023, 1, 1)

for i in range(1, NUM_REGISTROS + 1):

    patient_id = random.randint(1, 250)
    name = random.choice(patient_names)
    age = random.randint(22, 65)
    occupation = random.choice(occupations)
    patient_status = "Active"

    session_id = f"S{i}"
    session_date = start_date + timedelta(days=random.randint(0, 365))
    focus = random.choice(clinical_focus)

    sentiment_score = random.randint(20, 90)

    if sentiment_score < 45:
        sentiment_label = "Anxious"
    elif sentiment_score < 70:
        sentiment_label = "Neutral"
    else:
        sentiment_label = "Positive"

    detected_emotions = " | ".join(
        random.sample(emotions, random.randint(1, 2))
    )

    risk_count = random.randint(0, 2)
    risk_detail = random.choice(risk_details) if risk_count > 0 else ""

    summary = random.choice(session_summaries)

    data.append([
        patient_id,
        name,
        age,
        occupation,
        patient_status,
        session_id,
        session_date.strftime("%Y-%m-%d"),
        focus,
        sentiment_score,
        sentiment_label,
        detected_emotions,
        risk_count,
        risk_detail,
        summary
    ])

# --------------------------------
# DATAFRAME Y CSV
# --------------------------------
columns = [
    "Patient_ID",
    "Patient_Name",
    "Age",
    "Occupation",
    "Patient_Status",
    "Session_ID",
    "Session_Date",
    "Clinical_Focus",
    "Sentiment_Score",
    "Sentiment_Label",
    "Detected_Emotions",
    "Risk_Count",
    "Risk_Detail",
    "Session_Summary"
]

df = pd.DataFrame(data, columns=columns)

df.to_csv(
    "synthetic_clinical_dataset_powerbi.csv",
    index=False,
    encoding="utf-8"
)

print("CSV generated successfully with", len(df), "records")
