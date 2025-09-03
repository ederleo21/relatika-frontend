import React from 'react'

export const parseError = (err) => {
    const status = err?.response?.status || err?.status || 500;
    const message = err?.response?.data?.detail || err?.response?.data?.error || err?.message || "Error inesperado";
    return { status, message };
}